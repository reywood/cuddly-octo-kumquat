This projects tests various methods of setting `Meteor.settings.public.foo`.

To see different behaviors, run meteor in the following ways.

```sh
# Meteor.settings.public.foo should be undefined
$ meteor

# Meteor.settings.public.foo should be "bar"
$ meteor --settings settings.json

# Meteor.settings.public.foo should be "baz"
$ FOO=baz meteor

# Meteor.settings.public.foo should be "baz"
$ FOO=baz meteor --settings settings.json
```
