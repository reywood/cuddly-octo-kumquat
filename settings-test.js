if (Meteor.isClient) {
    Template.hello.helpers({
        foo: function () {
            return Meteor.settings.public.foo;
        }
    });
}

if (Meteor.isServer) {
    if (process.env.FOO) {
        Meteor.settings.public.foo = process.env.FOO;
    }
}
