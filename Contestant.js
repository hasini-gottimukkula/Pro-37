class Contestant {
    constructor() {
        this.button = createButton("Submit");
    }

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

    display() {

        button.mousePressed(function () {
            this.title.hide();
            this.input.hide();
            button.hide();
            this.button.position(120, 200);
            contestandCount += 1;
            contestant.index = contestantCount;
            contestand.update(name)
            contestand.updateCount(contestandCount);

        });
    }
}