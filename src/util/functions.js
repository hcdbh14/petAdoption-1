export const getAge = (age) => {
    let month = Math.round((age % 1) * 100), years = Math.trunc(age)
    return age < 1 ? `${month} חודשים ` : `${years} שנים ו${month} חודשים`
}

export const buildQuery = (query, search) => {
    const { age, region, gender, type, vaccinated, poopTrained, size, race } = search
    if (region != '') {
        if (region === 0)// south
            query = query.where("region", "==", '0')
        else if (region === 1) // center
            query = query.where("region", "==", '1')
        else //north
            query = query.where("region", "==", '2')
    }

    if (gender != '') {
        if (gender)// female
            query = query.where("gender", "==", '1')
        else // male
            query = query.where("gender", "==", '0')
    }

    if (type != '') {
        if (type === 0)// dog
            query = query.where("type", "==", '0')
        else if (type === 1) // cat
            query = query.where("type", "==", '1')
        else //other
            query = query.where("type", "==", '2')
    }

    if (vaccinated != '') {
        if (vaccinated)// true
            query = query.where("vaccinated", "==", '1')
        else // false
            query = query.where("vaccinated", "==", '0')
    }

    if (poopTrained != '') {
        if (poopTrained)// true
            query = query.where("poopTrained", "==", '1')
        else // false
            query = query.where("poopTrained", "==", '0')
    }

    if (size != '') {
        if (size === 0)// small
            query = query.where("size", "==", '0')
        else if (size === 1) // medium
            query = query.where("size", "==", '1')
        else //big
            query = query.where("size", "==", '2')
    }
    if (age != '') {
        if (age === 0)// puppy
            query = query.where("age", "<", 1)
        else if (age === 1) { // young
            query = query.where("age", ">=", 1)
            query = query.where("age", "<", 8)
        }
        else if (age === 2) // elder
            query = query.where("age", ">=", 8)
    }
    // query = query.orderBy("type")
    return query
}