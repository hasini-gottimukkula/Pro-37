class Contestant {
    constructor() { }

    getCount() {
        var ContestantCountRef = database.ref('ContestantCount');
        ContestantCountRef.on("value", function (data) {
            ContestantCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            ContestantCount: count
        });
    }

    update(name) {
        var ContestantIndex = "Contestant" + ContestantCount;
        database.ref(ContestantIndex).set({
            name: name
        });
    }
}