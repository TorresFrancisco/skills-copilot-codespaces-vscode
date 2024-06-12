function skillsMember() {
    var skills = {
        id: 1,
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        getSkills: function() {
            return this.skills;
        }
    };

    return skills;
}