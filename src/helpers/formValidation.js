const VALID_EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const VALID_PASSWORD_PATTERN = /((?=.*\d)(?=.*[a-z])(?=.*[\W]).{8,64})/;
const DOMAIN_PATTERN = /^([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*$/i;
const NAME_PATTERN = /^[a-zA-Z\s]*$/;
const TEXT_PATTERN = /^\s*$/;
const POSITIVE_NUMBER = /^[1-9]+[0-9]*$/;
export default function validate(form) {
    const errors = {};
    if ('username' in form) {
        if (!form.username) {
            errors.username = 'Username is required';
        }
        else if (form.username.trim().length < 5) {
            errors.username = 'Username should have at least 5 characters.';
        } else if (form.username.trim().length > 25) {
            errors.username = 'Username should be lesser than 25 characters.';
        }
    }

    if ('firstName' in form) {
        if (!form.firstName) {
            errors.firstName = 'First Name is required';
        } else if (!NAME_PATTERN.test(form.firstName)) {
            errors.firstName = 'First Name seems to be invalid. Only English alphabets are allowed in name.';
        } else if (form.firstName.trim().length < 3) {
            errors.firstName = 'First Name should have at least 3 characters.';
        } else if (form.firstName.trim().length > 15) {
            errors.firstName = 'First Name should be lesser than 15 characters.';
        }
    }

    if ('lastName' in form) {
        if (!form.lastName) {
            errors.lastName = 'Last Name is required';
        } else if (!NAME_PATTERN.test(form.lastName)) {
            errors.lastName = 'Last Name seems to be invalid. Only English alphabets are allowed in name.';
        } else if (form.lastName.trim().length < 3) {
            errors.lastName = 'Last Name should have at least 3 characters.';
        } else if (form.lastName.trim().length > 15) {
            errors.lastName = 'Last Name should be lesser than 15 characters.';
        }
    }

    if ("note" in form) {
        if (!form.note) {
            errors.message = "note is required";
        }
    }

    if ("title" in form && !form.title) {
        errors.title = "Title is required";
    }

    if ("profileImage" in form && !form.title) {
        errors.profileImage = "Profile image is required";
    }

    if ("new" in form) {
        if (!form.new) {
            errors.new = "Password is required";
        } else if (
            "newconfirmPassword" in form &&
            !VALID_PASSWORD_PATTERN.test(form.new)
        ) {
            errors.new =
                "Password must be 8 or more characters long, must contain alphabet [a-z] & number [0-9] & special character";
        }
    }

    if ("newconfirmPassword" in form) {
        if (!form.newconfirmPassword) {
            errors.newconfirmPassword = "Confirm password is required";
        } else if (form.new !== form.newconfirmPassword) {
            errors.newconfirmPassword = "Password fields do not match";
        }
    }

    return errors;
}
