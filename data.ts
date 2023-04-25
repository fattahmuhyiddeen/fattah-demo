const data: { state: string; district: string; city: string }[] = [];
for (let state = 0; state < 20; state++) {
    for (let district = 0; district < 20; district++) {
        for (let city = 0; city < 20; city++) {
            data.push({ state: `state${state}`, district: `district${state}-${district}`, city: `city${state}-${district}-${city}` })
        }
    }
}

export default data;