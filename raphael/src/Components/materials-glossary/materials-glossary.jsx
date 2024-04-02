//Import react
import React, { useState, useEffect } from 'react';

import styles from './materials-glossary.module.css'; //Import CSS styling

// Import components
import SearchBar from '../search-bar/search-bar';
import DropDown from '../drop-down/drop-down';
import MaterialsDisplay from '../materials-display/materials-display';

//Import data from API
import { fetchProductCompositions } from '../../data/api';

export default function MaterialsComposition() {
    const [materials, setMaterials] = useState([]);
    const [filteredMaterials, setFilteredMaterials] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductCompositions();
                setMaterials(data);
            } catch (error) {
                console.error('Error fetching materials:', error);
            }
        };
        fetchData();
    }, []);

    // Define handleDropdownSelect function to handle dropdown selection changes
    const handleDropdownSelect = (selectedOption, dropdownType) => {
        if (dropdownType === 'Sort') {
            setSortBy(selectedOption);
        } else if (dropdownType === 'Filter') {
            setFilterBy(selectedOption);
        }
    };

    useEffect(() => {
        let filtered = [...materials];
    
        // Apply sorting
        if (sortBy === 'A-Z') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'Z-A') {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === 'Water Consumption') {
            filtered.sort((a, b) => a.water_usage - b.water_usage);
        } else if (sortBy === 'Carbon Footprint') {
            filtered.sort((a, b) => a.carbon_footprint - b.carbon_footprint);
        }

        // Apply filtering
        if (sortBy === 'All') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (filterBy === 'Man-made') {
            filtered = filtered.filter(material => material.type === 'Man-Made');
        } else if (filterBy === 'Natural') {
            filtered = filtered.filter(material => material.type === 'Natural');
        }
    
        setFilteredMaterials(filtered);
    }, [materials, sortBy, filterBy]);

    return (
        <div className={styles.materialsCompositioncontainer}>
            <h1>Materials Glossary🧵</h1>
            <div className={styles.materialsContainer}>
                <div className={styles.searchcontainer}>
                    {/* Search bar */}
                    <SearchBar />
                    <div className={styles.dropdownContainer}>
                        <DropDown options={['All','A-Z', 'Z-A', 'Water Consumption', 'Carbon Footprint']} defaultOption={'Sort'} onSelect={(selectedOption) => handleDropdownSelect(selectedOption, 'Sort')} />
                        <DropDown options={['All','Man-made', 'Natural']} defaultOption={'Filter'} onSelect={(selectedOption) => handleDropdownSelect(selectedOption, 'Filter')} />
                    </div>
                </div>
                <MaterialsDisplay materials={filteredMaterials} />
            </div>
        </div>
    );
}
