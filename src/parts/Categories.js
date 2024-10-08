import Button from "components/Button";
import React, { Component } from "react";
import { motion } from "framer-motion";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`categories-${index1}`}>
        <motion.h4
          className="mb-3 font-weight-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category.name}
        </motion.h4>
        <div className="container-grid">
          {category.items.length == 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property in this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  key={`category-${index1}-item-${index2}`}
                  className="item column-3 row-1"
                >
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 * index2 }}
                >
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{height: 180}}>
                    <img src={item.imageUrl} alt={item.name}className="img-cover" />
                    </figure>
                    <div className="meta-wrapper">
                        <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-800">
                            <h5 className="h4">{item.name}</h5>
                        </Button>
                        <span className="text-gray-500">
                            {item.city}, {item.country}
                        </span>
                    </div>
                  </motion.div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
