import React, { useState } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    product || {
      Brand: "",
      pic: "", // Store image URL here
      Id: "", // Change from 0 to null
      Name: "",
      sku: "",
      quan: "",
      stock: "",
      price: "",
      location: "",
      Category: "",
    }
  );

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, pic: imageUrl });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Name || !formData.Brand || !formData.Category) {
      alert("Please fill all required fields!");
      return;
    }
    onSave({ ...formData, Id: formData.Id || Date.now() });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h1 className="product-form-head">Add Product</h1>
      {/* Image Upload Section */}
      <div className="form-group">
        <label>Product Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {formData.pic && (
          <div className="image-preview">
            <img src={formData.pic} alt="Preview" className="preview-img" />
          </div>
        )}
      </div>

      <div className="former">
        {/* Brand Name */}
        <div className="form-group">
          <label>
            Brand <span>*</span>
          </label>
          <input
            type="text"
            name="Brand"
            placeholder="Brand Name"
            value={formData.Brand}
            onChange={handleChange}
            required
          />
        </div>

        {/* Product ID */}
        <div className="form-group">
          <label>
            Product Id<span>*</span>
          </label>
          <input
            type="number"
            name="Id"
            placeholder="Id"
            value={formData.Id}
            onChange={handleChange}
            required
          />
        </div>

        {/* Product Name */}
        <div className="form-group">
          <label>
            Product Name<span>*</span>
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Product Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>

        {/* SKU */}
        <div className="form-group">
          <label>
            Stock Keeping Unit (SKU)<span>*</span>
          </label>
          <input
            type="number"
            name="sku"
            placeholder="SKU"
            value={formData.sku || "Auto-Generated"}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>
            Category<span>*</span>
          </label>
          <input
            type="text"
            name="Category"
            placeholder="Category"
            value={formData.Category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Quantity */}
        <div className="form-group">
          <label>
            Quantity<span>*</span>
          </label>
          <input
            type="number"
            name="quan"
            placeholder="Quantity"
            value={formData.quan}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label>
            Price<span>*</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="0.00"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>
            Location<span>*</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn1 btn-primary">
          Discard
        </button>
        <button type="submit" className="btn2 btn-secondary">
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
