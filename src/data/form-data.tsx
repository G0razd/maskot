export const obory: FieldValue[] = [
  "Finanční a pojistná matematika (v programu Matematika)",
  "Matematická biologie",
  "Obecná matematika (v programu Matematika) ",
  "Program Matematika se zaměřením na vzdělávání",
  "Sdružené studium programu Matematika (např. s ekonomií)",
  "Statistika a analýza dat (v programu Matematika) ",
  "Jiný",
]

export const kombinace: FieldValue[] = [
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

type FieldType = "date" | "select" | "checkbox" | "tel" | "email" | "year" | "input"
type FieldName = string
type FieldValue = string | boolean

export interface FormField {
  name: FieldName
  type?: FieldType | `conditional ${FieldType}`
  conditional?: [FieldName, FieldValue]
  notRequired?: boolean
  options?: FieldType extends "select" ? FieldValue[] : FieldValue[] | undefined
  label?: string
}

export const fields: FormField[] = [
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
    notRequired: true,
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
    label: "Máš nějaká omezení stravy?",
    type: "conditional input",
  },
  // {
  //   name: "Volení do PS",
  //   description: "Budeš chtít během kurzu jít volit do PS?",
  //   type: "checkbox",
  // },
]
