import { motion } from "framer-motion";
import image from "../assets/list.png";

const Title = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <motion.figure
              animate={{
                y: [-300, 20, 0],
              }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={image}
                width="100"
                height="100"
                alt="list"
                className="img-fluid mb-2"
              />
              <figcaption className="title">
                Todo <span className="title-2 py-0 px-2">List</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
