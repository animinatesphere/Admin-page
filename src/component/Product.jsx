import React, { useState } from "react";
import NavBar from "./NavBar";
import NanBar2 from "./NanBar2";
import "../component/product.css";
import "../component/ProductForm";
import "../component/Modal";
import group from "../images/Group.png";
import frame1 from "../images/Frame 25.png";
import frame2 from "../images/Frame 26.png";
import Modal from "../component/Modal";
import ProductForm from "../component/ProductForm";
import res from "../images/unsplash_WWesmHEgXDs.png";
import res2 from "../images/2dfbce66b75ef05dd543204a1ebd0be9.jpeg";
import pack from "../images/icon-park-outline_ad-product.png";

import vec from "../images/Vector.png";
import vec2 from "../images/Vector (1).png";
import loca from "../images/carbon_location-filled.png";
import warn from "../images/ant-design_warning-outlined.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (product) => {
    if (isEditing) {
      setProducts(products.map((p) => (p.Id === product.Id ? product : p)));
    } else {
      setProducts([...products, { ...product, Id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteProduct = () => {
    if (productToDelete) {
      setProducts(products.filter((p) => p.Id !== productToDelete.Id));
    }
    setIsDeleteModalOpen(false);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <div className="bus-product">
        <NanBar2 />
        <div className="Nav3-bus">
          <div className="nav3-chil">
            <div className="nav3-left">
              <h1 className="nav3-logo">Products</h1>
              <div className="nav3-input">
                <img src={group} alt="" className="input-icon" />
                <input
                  type="text"
                  placeholder="Search.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="nav3-right">
              <div className="nav3-right1">
                <img src={frame1} alt="" />
              </div>
              <div className="nav3-right2">
                <img src={frame2} alt="" />
              </div>
              <button onClick={handleAddProduct} className="btns">
                + Product
              </button>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>pic</th>
              <th>Product ID</th>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter(
                (product) =>
                  product.Name.toLowerCase().includes(
                    searchQuery.toLowerCase()
                  ) ||
                  product.sku
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  product.Id.toString().includes(searchQuery)
              )
              .map((product) => (
                <tr
                  key={product.Id}
                  onClick={() => handleViewProduct(product)}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    <img
                      src={product.pic || res}
                      alt={product.Name}
                      className="irpot"
                    />
                  </td>
                  <td>{product.Id}</td>
                  <td>{product.sku}</td>
                  <td>{product.Name}</td>
                  <td>{product.quan}</td>
                  <td>{product.price} Php</td>
                  <td>
                    <img src={loca} alt="" /> {product.location}
                  </td>
                  <td className="last-ed">
                    <img
                      src={vec}
                      alt=""
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditProduct(product);
                      }}
                      className="btn btn-secondary"
                    />
                    <img
                      src={vec2}
                      alt=""
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProduct(product);
                      }}
                      className="btn btn-danger"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ProductForm
            product={selectedProduct}
            onSave={handleSaveProduct}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>

        {isDetailModalOpen && (
          <Modal
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
          >
            <div className="detail-parent">
              {/* Product Image */}
              <div className="details-images">
                <img
                  src={selectedProduct?.pic || res} // Use selectedProduct.pic if available, otherwise fallback to res
                  alt={selectedProduct?.Name || "Product Image"} // Set alt text
                  className="product-image"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }} // Adjust styling if needed
                />
              </div>

              {/* Product Details */}
              <div className="product-details">
                <h2 className="pro-head">
                  <img src={pack} alt="" /> Product Details
                </h2>

                <p className="warn-pare">
                  <strong className="warn3">Product ID:</strong>
                  <span className="warn-chil"> {selectedProduct?.Id}</span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">Brand:</strong>
                  <span className="warn-chil">
                    {selectedProduct?.Brand || "N/A"}
                  </span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">Product Name:</strong>
                  <span className="warn-chil">{selectedProduct?.Name}</span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">Category:</strong>
                  <span className="warn-chil">{selectedProduct?.Category}</span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">Price:</strong>
                  <span className="warn-chil">{selectedProduct?.price}</span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">Location:</strong>
                  <span className="warn-chil">{selectedProduct?.location}</span>
                </p>
                <p className="warn-pare">
                  <strong className="warn3">SKU:</strong>
                  <span className="warn-chil">
                    {selectedProduct?.sku || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
          >
            <div className="delete-modal">
              <h2 className="warn">
                <img src={warn} alt="" /> DELETE CONFIRMATION
              </h2>
              <p className="warn2">
                Are you sure you want to delete this product?
              </p>
              <p className="warn-pare">
                <strong className="warn3">Product ID:</strong>
                <p className="warn-chil">{productToDelete?.Id}</p>
              </p>
              <p className="warn-pare">
                <strong className="warn3">Brand:</strong>
                <p className="warn-chil">{productToDelete?.Brand}</p>
              </p>
              <p className="warn-pare">
                <strong className="warn3">Product Name:</strong>
                <p className="warn-chil">{productToDelete?.Name || "N/A"}</p>
              </p>
              <p className="warn-pare">
                <strong className="warn3">Category:</strong>
                <p className="warn-chil">
                  {productToDelete?.Category || "N/A"}
                </p>
              </p>
              <div className="modal-buttons">
                <button
                  className="btnw btn-secondary"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="btne btn-danger"
                  onClick={confirmDeleteProduct}
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Product;
