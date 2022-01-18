import React from "react"
import { Layout, Info, FormikGenerator } from "../components"

const SignUp = () => {
  const obory = [
    "Finanční a pojistná matematika (v programu Matematika)",
    "Matematická biologie",
    "Obecná matematika (v programu Matematika) ",
    "Program Matematika se zaměřením na vzdělávání",
    "Sdružené studium programu Matematika (např. s ekonomií)",
    "Statistika a analýza dat (v programu Matematika) ",
    "Jiný",
  ]

  const kombinace = [
    "s angličtinou",
    "s biologií",
    "s češtinou",
    "s fyzikou",
    "s geografií",
    "s hudební výchovou",
    "s chemií",
    "s informatikou",
    "s tělesnou výchovou",
    "s výtvarnou výchovou",
    "se speciální pedagogikou",
  ]
  const fields = [
    {
      name: "Jméno",
    },
    {
      name: "Příjmení",
    },
    {
      name: "Datum Narození",
      type: "date",
    },
    {
      name: "Adresa",
    },
    {
      name: "Telefon",
      type: "tel",
    },
    { name: "Email", type: "email" },
    {
      name: "Škola",
    },
    {
      name: "Rok maturity",
      type: "year",
    },
    {
      name: "Obor",
      type: "select",
      options: obory,
    },
    {
      name: "V kombinaci",
      type: "select",
      conditional: ["Obor", "Matematická biologie"],
      options: kombinace,
    },
    {
      name: "Jiný program studia",
      conditional: ["Obor", "Jiný"],
    },
    {
      name: "Omezení stravy",
      description: "Máš nějaká omezení stravy?",
      type: "conditional input",
    },
    {
      name: "Volení do PS",
      description: "Budeš chtít během kurzu jít volit do PS?",
      type: "checkbox",
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto mt-20 text-lg leading-8 text-justify md:max-w-6xl">
        <Info />
        <FormikGenerator fields={fields} />
      </div>
    </Layout>
  )
}

export default SignUp
