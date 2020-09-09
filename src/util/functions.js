export const getAge = (age) => {
    let month = Math.round((age % 1) * 100), years = Math.trunc(age)
    return age < 1 ? `${month} חודשים ` : `${years} שנים ו${month} חודשים`
}

const checkQueryVariables = (variable, value, query) => {

    if (value != '' || value === 0) {
        if (`${variable}` == 'region' || `${variable}` == 'type' || `${variable}` == 'size') {
            if (value === 0)
                query = query.where(`${variable}`, "==", '0')

            else if (value === 1)
                query = query.where(`${variable}`, "==", '1')

            else
                query = query.where(`${variable}`, "==", '2')

        }
        else if (`${variable}` == 'gender' || `${variable}` == 'vaccinated' || `${variable}` == 'poopTrained') {
            if (value)
                query = query.where(`${variable}`, "==", '1')

            else
                query = query.where(`${variable}`, "==", '0')
        }
        else if (`${variable}` == 'age') {
            if (value === 0) // puppy
                query = query.where(`${variable}`, "<", 1)

            else if (value === 1) { // young
                query = query.where(`${variable}`, ">=", 1)
                query = query.where(`${variable}`, "<", 8)
            }
            else if (value === 2) // elder
                query = query.where(`${variable}`, ">=", 8)
        }

    }
    return query
}

export const buildQuery = (query, search) => {
    Object.keys(search).forEach(key => {
        query = checkQueryVariables(key, search[key], query)
    });
    // query = query.orderBy("type")
    return query
}