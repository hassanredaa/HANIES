import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


export default function UpdatePost() {
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        setPhoto(selectedPhoto);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Category:', category);
        console.log('Content:', content);
        console.log('Photo:', photo);
        setCategory('');
        setContent('');
        setPhoto(null);
    }

    const handleCancel = () => {
        setCategory('');
        setContent('');
        setPhoto(null);
    }

    return (
        <div className="post-container">
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit} className="post-form">
                <div className="input-group">
                    <label htmlFor="category">Select Category:</label>
                    <select id="category" name="category" value={category} required onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        <option value="clothes">Clothes</option>
                        <option value="toys">Toys</option>
                        <option value="food">Food</option>
                        <option value="medical_supplies">Medical Supplies</option>
                        <option value="school_supplies">School Supplies</option>
                        <option value="blood_donations">Blood Donations</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="content">Post Content:</label>
                    <textarea id="content" name="content" value={content} onChange={handleContentChange} rows="3" cols="40" placeholder="Write your post here..."></textarea>
                </div>
                <div className="input-group">
                    <label htmlFor="photo">Add Photo:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />
                </div>
                <div >
                <Link to="/OrganizationHome" className="button-primary">
                           Save
                        </Link>
                    <Link to="/OrganizationHome" className="button-primary">
                           Cancel
                        </Link>
                </div>
            </form>
        </div>
    );
}
