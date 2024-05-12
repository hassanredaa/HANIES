import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MedicalCases = () => {
    // Sample medical cases data
    const medicalCases = [
        { id: 1, name: 'Case 1', medical_speciality: 'cardiovascular', organization_name: 'el haya', area: 'masr el gedida', governorate: 'Cairo' },
        { id: 2, name: 'Case 2', medical_speciality: 'Internal Medicine', organization_name: 'Community Hospital', area: 'central park', governorate: 'Alexandria' },
        { id: 3, name: 'Case 3', medical_speciality: 'Orthopedics', organization_name: 'General Hospital', area: 'south LA', governorate: 'Suez' },
        { id: 4, name: 'Case 4', medical_speciality: 'orthodontics', organization_name: 'Queens hospital', area: 'central london', governorate: 'Menya' },
    ];

    const [selectedMedicalSpecialty, setSelectedMedicalSpecialty] = useState('all');
    const [selectedOrganization, setSelectedOrganization] = useState('all');
    const [selectedArea, setSelectedArea] = useState('all');
    const [selectedGovernorate, setSelectedGovernorate] = useState('all');

    const handleMedicalSpecialtyFilter = (medicalSpecialty) => {
        setSelectedMedicalSpecialty(medicalSpecialty);
    };

    const handleOrganizationFilter = (organization) => {
        setSelectedOrganization(organization);
    };

    const handleAreaFilter = (area) => {
        setSelectedArea(area);
    };

    const handleGovernorateFilter = (governorate) => {
        setSelectedGovernorate(governorate);
    };

    const filteredCases = medicalCases.filter(caseItem => {
        if (selectedMedicalSpecialty !== 'all' && caseItem.medical_speciality !== selectedMedicalSpecialty) {
            return false;
        }
        if (selectedOrganization !== 'all' && caseItem.organization_name !== selectedOrganization) {
            return false;
        }
        if (selectedArea !== 'all' && caseItem.area !== selectedArea) {
            return false;
        }
        if (selectedGovernorate !== 'all' && caseItem.governorate !== selectedGovernorate) {
            return false;
        }
        return true;
    });

    return (
        <div>
            <h1>Medical Cases</h1>
            <div className="filters">
                <label htmlFor="medical-specialty-filter">Filter by Medical Specialty:</label>
                <select id="medical-specialty-filter" value={selectedMedicalSpecialty} onChange={(e) => handleMedicalSpecialtyFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="cardiovascular">Cardiovascular</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="orthodontics">Orthodontics</option>
                    {/* Add more options for other medical specialties as needed */}
                </select>
                <label htmlFor="organization-filter">Filter by Organization:</label>
                <select id="organization-filter" value={selectedOrganization} onChange={(e) => handleOrganizationFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="el haya">El Haya</option>
                    <option value="Community Hospital">Community Hospital</option>
                    <option value="General Hospital">General Hospital</option>
                    <option value="Queens hospital">Queens Hospital</option>
                    {/* Add more options for other organizations as needed */}
                </select>
                <label htmlFor="area-filter">Filter by Area:</label>
                <select id="area-filter" value={selectedArea} onChange={(e) => handleAreaFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="masr el gedida">Masr El Gedida</option>
                    <option value="central park">Central Park</option>
                    <option value="south LA">South LA</option>
                    <option value="central london">Central London</option>
                    {/* Add more options for other areas as needed */}
                </select>
                <label htmlFor="governorate-filter">Filter by Governorate:</label>
                <select id="governorate-filter" value={selectedGovernorate} onChange={(e) => handleGovernorateFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Suez">Suez</option>
                    <option value="Menya">Menya</option>
                    {/* Add more options for other governorates as needed */}
                </select>
            </div>
            <div className="medical-cases-container">
                {filteredCases.map(caseItem => (
                    <div key={caseItem.id} className="product-tile">
                        
                        <div className="product-info">
                            <h2 className="product-title">{caseItem.name}</h2>
                            <p>Medical Specialty: {caseItem.medical_speciality}</p>
                            <p>Organization: {caseItem.organization_name}</p>
                            <p>Area: {caseItem.area}</p>
                            <p>Governorate: {caseItem.governorate}</p>
                            <Link to={`/case${caseItem.id}`} className="add-to-cart">More Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedicalCases;
