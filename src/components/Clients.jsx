import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div
      className={`${styles.flexCenter} flex-wrap w-full ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}
    >
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 `}>
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain hover:text-white feedback-card p-10 rounded-full "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
