import React from "react"
import { camelCase } from "lodash"
import { Formik, Field, Form } from "formik"
import SteinStore from "stein-js-client";
const FormikGenerator = ({ fields }) => {
 
  const steinAPI = "https://api.steinhq.com/v1/storages/64ab06f3eced9b09e9df76ae"
  const store = new SteinStore(steinAPI);
  function handleSubmit(values) {
    console.log(values);
    store.append("odpovedi", [values])
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err);
      });
  }


  function init(fields) {
    const initialValues = {}
    fields.forEach(value => {
      if (value.type?.includes("conditional")) {
        initialValues[`${camelCase(value.name)}Bool`] = false
      }
      initialValues[camelCase(value.name)] = value.type === "checkbox" ? false : ""
    })

    return initialValues
  }

  const initialValues = init(fields)
  console.log(Object.keys(initialValues))
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
        handleSubmit(values)
        
      }}
    >
      {({ values }) => (
        <Form className="items-end max-w-4xl grid-cols-2 gap-8 pt-20 mx-auto md:grid">
          {fields.map((value, key) => {
            const conditional = value.type?.includes("conditional")
            const show =
              !value.conditional ||
              values[camelCase(value?.conditional[0])] === value?.conditional[1]
            if (conditional) {
              console.log(values[`${camelCase(value.name)}Bool`])
            }
            return (
              show && (
                <div
                  key={key}
                  className={
                    conditional ? "my-8 lg:my-0 col-span-2 grid-cols-2 md:grid gap-8 h-12" : ""
                  }
                >
                  <div className={`flex items-center justify-between w-full`}>
                    {show && (
                      <label className="pr-8 text-sm label" htmlFor={camelCase(value.name)}>
                        {value.description ? (
                          <span className="text-lg">{value.description} </span>
                        ) : (
                          value.name
                        )}
                      </label>
                    )}
                    {(conditional || value.type === "checkbox") && (
                      <Field
                        type="checkbox"
                        className="checkbox checkbox-lg checkbox-primary"
                        name={`${camelCase(value.name)}${value.type === "checkbox" ? "" : "Bool"}`}
                      />
                    )}
                  </div>
                  {value.type !== "checkbox" &&
                    (!conditional || values[`${camelCase(value.name)}Bool`] === true) &&
                    show && (
                      <Field
                        type={value.type?.replace("conditional", "") ?? "input"}
                        className="w-full input input-bordered"
                        name={camelCase(value.name)}
                        component={value.type === "select" && "select"}
                      >
                        {value.type === "select"
                          ? value.options.map((o, key) => (
                              <option key={key} value={o}>
                                {o}
                              </option>
                            ))
                          : null}
                      </Field>
                    )}
                </div>
              )
            )
          })}
          <div className="flex justify-center col-span-2">
            <button className="mx-auto btn btn-lg btn-primary" type="submit">
              Odeslat
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormikGenerator
