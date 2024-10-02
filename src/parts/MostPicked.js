import React from "react";
import Button from "components/Button";
import { motion } from "framer-motion";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <motion.h4
        className="mb-3"
        initial={{ opacity: 0, y: 50 }}  // Mulai dari opacity 0 dan bergerak dari bawah
        animate={{ opacity: 1, y: 0 }}  // Animasi ke opacity 1 dan posisi normal
        transition={{ duration: 0.8 }}  // Durasi animasi 0.8 detik
      >
        Most Picked
      </motion.h4>
      {/* <h4 className="mb-3">Most Picked</h4> */}
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <motion.div
            key={`mostpicked-${index}`}
            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 * index }} // Menambahkan delay berdasarkan index
          >
            {/* <div key={`mostpicked-${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            > */}
              <div className="card card-featured">
                <div className="tag">
                    ${item.price}
                    <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                    <img src={item.imageUrl} alt={item.className} className="img-cover" />
                </figure>
                <div className="meta-wrapper">
                    <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                        <h5>{item.name}</h5>
                    </Button>
                    <span>
                        {item.city}, {item.country}
                    </span>
                </div>
              </div>
            {/* </div> */}
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
