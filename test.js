let cell1 = {
    alive : true,
    neighbor : 3}
    let cell2 = {
    alive : true,
    neighbor : 1}
    let cell3 = {
    alive : true,
    neighbor : 4}
    let cell4 = {
    alive : true,
    neighbor : 2}
    let cell5 = {
    alive : false,
    neighbor : 3}
    let cell6 = {
        alive : false,
        neighbor : 2
    }
    
    function simulateLife(cell){
        if (cell.alive == false){
            if (cell.neighbor != 3){
                return false
            }
            return true
        }
        if (cell.neighbor < 2 || cell.neighbor > 3){
            return false
        } else {
            return true 
        }
    }


    describe("simulateLife", () =>{
        test ("Cell 1 should be alive if it has 3 neighbours", () =>
        {
            const result = simulateLife(cell1);
            expect(result).toBe(true)
        })

        test ("Cell 2 should be dead as it only has 1 neighbour", () =>
        {
            const result = simulateLife(cell2);
            expect(result).toBe(false)
        })

        test ("Cell 3 should be dead as it has 4 neighbours", () =>
        {
            const result = simulateLife(cell3);
            expect(result).toBe(false)
        })

        test ("Cell 4 should be alive as it has 2 neighbours", () =>
        {
            const result = simulateLife(cell4);
            expect(result).toBe(true)
        })

        test ("Cell 5 should be dead but as it has 3 or more neighbours it comes back to life", () =>
        {
            const result = simulateLife(cell5);
            expect(result).toBe(true)
        })

        test ("Cell 6 should be dead as it has 2 neighbours", () =>
        {
            const result = simulateLife(cell6);
            expect(result).toBe(false)
        })


    })
