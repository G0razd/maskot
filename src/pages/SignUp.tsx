import React from "react"
import { Layout, Info, FormikGenerator } from "@components"
import { fields } from "@data"
import SteinStore from "stein-js-client"

const steinAPI = "https://api.steinhq.com/v1/storages/64ab06f3eced9b09e9df76ae"
const store = new SteinStore(steinAPI)
function handleSubmit(values) {
  store
    .append("odpovedi", [values])
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      alert(err)
    })
}

const SignUp = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-20 text-lg leading-8 text-justify md:max-w-6xl">
        <Info />
        <FormikGenerator fields={fields} handleSubmit={handleSubmit} />
      </div>
    </Layout>
  )
}

export default SignUp
