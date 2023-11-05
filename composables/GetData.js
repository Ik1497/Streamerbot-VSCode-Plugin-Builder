export default function (serverData = []) {
  let returnObject = {}

  serverData = serverData.map(item => {
    if (item.defaultValue != undefined && item.defaultValue != null) item.defaultValue = item.defaultValue
      .replace(`False`, `false`)
      .replace(`True`, `true`)

    return item
  })

  serverData.forEach(method => {
    if (method.type === `c-sharp-method`) {
      returnObject[method.signature] = {
        prefix: `CPH.${method.name}`,
        body: [
          `CPH.${method.name}(${method.parameters.map((item, itemIndex) => {
            return '${' + (itemIndex + 1) + `:${item.type} ${item.name}${item.optional ? ` = ${item.defaultValue}` : ``}` + '}'
          }).join(`, `)});`
        ]
      }
    } else {
      console.log(method)
    }
  });

  console.log(serverData)

  return returnObject
}