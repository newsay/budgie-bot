import { FormWrapper } from "./FormWrapper"

type UserData = {
    firstName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
    firstName,
    lastName,
    age,
    updateFields,
}: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input
                autoFocus
                required
                type="text"
                id="fname"
                name="fname"
                value={firstName}
                onChange={e => updateFields({ firstName: e.target.value })}
            />
            <label>Last Name</label>
            <input
                required
                type="text"
                id="lname"
                name="lname"
                value={lastName}
                onChange={e => updateFields({ lastName: e.target.value })}
            />
            <label>Age</label>
            <input
                required
                min={1}
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={e => updateFields({ age: e.target.value })}
            />
        </FormWrapper>
    )
}