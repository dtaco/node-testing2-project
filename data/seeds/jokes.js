exports.seed = function(knex, Promise) {
    return knex('jokes')
    .truncate()
    .then(function() {
        return knex('jokes').insert([
            {joke: "I'm afraid for the calendar.", punchline: "Its days are numbered."},
            {joke: "My wife said I should do lunges to stay in shape.", punchline: "That would be a big step forward."},
            {joke: "Why do fathers take an extra pair of socks when they go golfing?", punchline: "In case they get a hole in one!"},
            {joke: "Singing in the shower is fun until you get soap in your mouth.", punchline: "Then it's a soap opera."},
            {joke: "How does the moon cut his hair?", punchline: "Eclipse it."},
        ]);
    });
};