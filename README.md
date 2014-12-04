# Ember-cli-bootstrap-components

This addon (will) provides a number of useful bootstrap themed components that use Ember Bindings to automatically add necessary validation states

## Installation
* `npm install ember-cli-bootstrap-components`

## Usage

### bs-input

Wraps a label and text input for a ordinary bootstrap form. Can accept bindings for the following values:

* for
* labelText
* type
* id
* placeholder
* value
* errors

Errors are assumed to follow the conventions of DS.Errors and be an array of objects with a message property. When using ActiveModelAdapter, this makes it trivual to bind fields to Rails validation errors.

```hbs
<form role="form>
  {{bs-input for="username" labelText="Username" type="text" value=username errors=errors.username}}
  {{bs-input for="password" labelText="Password" type="password" value=password errors=errors.password}}
  {{bs-input for="password_confirmation" labelText="Password Confirmation" type="password" value=password_confirmation errors=errors.password_confirmation}}
</form>
```

## Contributin

1. Send a Pull Request!
