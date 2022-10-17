const readKit = (kit, checkboxDiv) => {
    for (key in kit) {

        const childrenKit = kit[key]
        const countKeyInCheldrenKit = Object.keys(childrenKit).length
        const hightKeyIsExist = childrenKit.h

        if (countKeyInCheldrenKit > 0) {

            let newComponent

            if (hightKeyIsExist !== undefined)
            {
                // checkbox
                newComponent = getNewComponent(key, childrenKit)
            } else {
                // or label
                newComponent = getNewComponent(key)
            }

            checkboxDiv.appendChild(newComponent)

            readKit(childrenKit, checkboxDiv)

        }
    }
}

const getNewComponent = (name, value) => {
    const newComponent = document.createElement('div')

    if (value)
    {
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.name = name
        checkbox.setAttribute('h', value.h)
        checkbox.setAttribute('w', value.w)
        newComponent.appendChild(checkbox)
    }

    const label = document.createElement('label')
    label.appendChild(document.createTextNode(name))
    newComponent.appendChild(label)

    return newComponent
}

const getActiveCheckboxes = () => {
    const activeCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    const url = document.getElementById('urlInput').value

    for (i = 0; i < activeCheckboxes.length; i++) {

        const checkbox = activeCheckboxes[i]
        const height = checkbox.getAttribute('h')
        const width = checkbox.getAttribute('w')
        const name = checkbox.getAttribute('name')

        window.open(
            url, 
            name, 
            `Toolbar=1, 
            Copyhistory=1,
            Width=${width}, 
            Height=${height}`
        )
    }
}