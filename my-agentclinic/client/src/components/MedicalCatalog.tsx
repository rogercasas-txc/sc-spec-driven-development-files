import React, { useEffect, useState, useMemo } from 'react';
import { registryService, type Ailment, type Therapy } from '../services/registryService';

type SortField = 'name' | 'severity' | 'estimatedDowntime';

const MedicalCatalog: React.FC = () => {
  const [ailments, setAilments] = useState<Ailment[]>([]);
  const [therapies, setTherapies] = useState<Therapy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeTab, setActiveTab] = useState<'ailments' | 'therapies'>('ailments');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [a, t] = await Promise.all([
          registryService.getAilments(),
          registryService.getTherapies()
        ]);
        setAilments(a);
        setTherapies(t);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load catalog');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredItems = useMemo(() => {
    const items = activeTab === 'ailments' ? ailments : therapies;
    return items
      .filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const valA = (a as any)[sortField];
        const valB = (b as any)[sortField];
        
        if (valA === undefined || valB === undefined) return 0;

        if (typeof valA === 'number' && typeof valB === 'number') {
          return sortOrder === 'asc' ? valA - valB : valB - valA;
        }
        
        const strA = String(valA).toLowerCase();
        const strB = String(valB).toLowerCase();
        
        if (strA < strB) return sortOrder === 'asc' ? -1 : 1;
        if (strA > strB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
  }, [activeTab, ailments, therapies, searchTerm, sortField, sortOrder]);

  if (loading) return <article aria-busy="true">Querying medical database...</article>;
  if (error) return <article className="pico-color-red-500">Error: {error}</article>;

  return (
    <div className="container">
      <hgroup>
        <h1>Medical Catalog</h1>
        <p>A comprehensive directory of AI-specific conditions and treatments.</p>
      </hgroup>

      <nav>
        <ul>
          <li>
            <button 
              className={activeTab === 'ailments' ? '' : 'secondary outline'} 
              onClick={() => { setActiveTab('ailments'); setSortField('name'); }}
            >
              Ailments
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'therapies' ? '' : 'secondary outline'} 
              onClick={() => { setActiveTab('therapies'); setSortField('name'); }}
            >
              Therapies
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <input 
              type="search" 
              placeholder={`Search ${activeTab}...`} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </li>
        </ul>
      </nav>

      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th>Description</th>
              {activeTab === 'ailments' ? (
                <th onClick={() => handleSort('severity')} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Severity {sortField === 'severity' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
              ) : (
                <th onClick={() => handleSort('estimatedDowntime')} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Downtime {sortField === 'estimatedDowntime' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <tr key={item.id}>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.description}</td>
                  <td>
                    {activeTab === 'ailments' 
                      ? `${(item as Ailment).severity}/10` 
                      : (item as Therapy).estimatedDowntime}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', padding: '2rem' }}>
                  No {activeTab} found matching "{searchTerm}". Maybe it's a new strain?
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </figure>
    </div>
  );
};

export default MedicalCatalog;
