function skillsMember()
{
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'React', 'NodeJS'],
        details: function() {
            console.log(this.name + ' is ' + this.age + ' years old.');
            console.log(this.name + ' knows ' + this.skills);
        }
    };
    return member;
}