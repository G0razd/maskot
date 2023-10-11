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
export type FieldName = string
export type FieldValue = string | boolean

export interface FormField {
  name: FieldName
  description?: string
  autocomplete?: string
  type?: FieldType | `conditional ${FieldType}`
  conditional?: [FieldName, FieldValue]
  notRequired?: boolean
  options?: FieldType extends "select" ? FieldValue[] : FieldValue[] | undefined
  label?: string
}

export const fields: any = [
  {
    name: "Jméno",
    autocomplete: "given-name",
  },
  {
    name: "Příjmení",
    autocomplete: "family-name",
  },
  {
    name: "Datum Narození",
    autocomplete: "bday",
    type: "date",
  },
  {
    name: "Adresa",
    autocomplete: "street-address",
  },
  {
    name: "Telefon",
    autocomplete: "tel",
    type: "tel",
  },
  {
    name: "Email",
    autocomplete: "email",
    type: "email",
  },
  {
    name: "Škola",
    autocomplete: "organization",
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
