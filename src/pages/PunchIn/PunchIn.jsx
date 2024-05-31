import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import "./punchIn.css";

export default function PunchIn() {
  function postPunchIn() {
    console.log("hola");
  }

  return (
    <section className='punchIn fade-in'>
      <PageHeader title='FICHERO' />
      <button onClick={postPunchIn} className='btn btn-success'>
        Enviar Fichada
      </button>
    </section>
  );
}
