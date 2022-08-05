export const treeView = [
    {
        value: 'Item1',
        label: 'item1 with key and tooltip'
    },
    {
        value: 'Item2',
        label: 'item2'
    },
    {
        value: 'WithSomeChildren',
        label: 'with some children',
        children: [
            { 
                value: 'SubItem3.1', 
                label: 'Sub-item 3.1', 
                children: [
                    { value: 'SubItem3.1.1', label: 'Sub-item 3.1.1' },
                    { value: 'SubItem3.1.2', label: 'Sub-item 3.1.2' }
                ] 
            },
            { 
                value: 'SubItem3.2', 
                label: 'Sub-item 3.2', 
                children: [
                    { value: 'SubItem3.2.1', label: 'Sub-item 3.2.1' },
                    { value: 'SubItem3.2.2', label: 'Sub-item 3.2.2' }
                ] 
            }
        ]
    },
    {
        value: 'DocumentWithSomeChildren',
        label: 'Document with some children (expanded on init)',
        children: [
            { 
                value: 'SubItem4.1', 
                label: 'Sub-item 4.1 (active and focus on init)', 
                children: [
                    { value: 'SubItem4.1.1', label: 'Sub-item 4.1.1' },
                    { value: 'SubItem4.1.2', label: 'Sub-item 4.1.2' }
                ] 
            },
            { 
                value: 'SubItem4.2', 
                label: 'Sub-item 4.2', 
                children: [
                    { value: 'SubItem4.2.1', label: 'Sub-item 4.2.1' },
                    { value: 'SubItem4.2.2', label: 'Sub-item 4.2.2' }
                ] 
            }
        ]
    }
]

export const checkTree = [
    {
        value: 'Item1',
        label: 'item1 with key and tooltip'
    },
    {
        value: 'Item2',
        label: 'item2: selected on init'
    },
    {
        value: 'WithSomeChildren',
        label: 'some children',
        children: [
            { 
                value: 'SubItem3.1', 
                label: 'Sub-item 3.1', 
                children: [
                    { value: 'SubItem3.1.1', label: 'Sub-item 3.1.1' },
                    { value: 'SubItem3.1.2', label: 'Sub-item 3.1.2' }
                ] 
            },
            { 
                value: 'SubItem3.2', 
                label: 'Sub-item 3.2', 
                children: [
                    { value: 'SubItem3.2.1', label: 'Sub-item 3.2.1' },
                    { value: 'SubItem3.2.2', label: 'Sub-item 3.2.2' }
                ] 
            }
        ]
    },
    {
        value: 'DocumentWithSomeChildren',
        label: 'Document with some children (expanded on init)',
        children: [
            { 
                value: 'SubItem4.1', 
                label: 'Sub-item 4.1 (active on init)', 
                children: [
                    { value: 'SubItem4.1.1', label: 'Sub-item 4.1.1' },
                    { value: 'SubItem4.1.2', label: 'Sub-item 4.1.2' }
                ] 
            },
            { 
                value: 'SubItem4.2', 
                label: 'Sub-item 4.2 (selected on init)', 
                children: [
                    { value: 'SubItem4.2.1', label: 'Sub-item 4.2.1' },
                    { value: 'SubItem4.2.2', label: 'Sub-item 4.2.2' }
                ] 
            },
            { 
                value: 'SubItem4.3', 
                label: 'Sub-item 4.3 (hideCheckbox)',
                showCheckbox: false
            },
            { 
                value: 'SubItem4.4', 
                label: 'Sub-item 4.4 (unSelectable)',
                disabled: true
            }
        ]
    }
]

export const radioTree = [
    {
        value: 'Item1',
        label: 'item1 with key and tooltip'
    },
    {
        value: 'Item2',
        label: 'item2: selected on init'
    },
    {
        value: 'WithSomeChildren',
        label: 'some children',
        children: [
            { 
                value: 'SubItem3.1', 
                label: 'Sub-item 3.1', 
                children: [
                    { value: 'SubItem3.1.1', label: 'Sub-item 3.1.1' },
                    { value: 'SubItem3.1.2', label: 'Sub-item 3.1.2' }
                ] 
            },
            { 
                value: 'SubItem3.2', 
                label: 'Sub-item 3.2', 
                children: [
                    { value: 'SubItem3.2.1', label: 'Sub-item 3.2.1' },
                    { value: 'SubItem3.2.2', label: 'Sub-item 3.2.2' }
                ] 
            }
        ]
    },
    {
        value: 'DocumentWithSomeChildren',
        label: 'Document with some children (expanded on init)',
        children: [
            { 
                value: 'SubItem4.1', 
                label: 'Sub-item 4.1 (active on init)', 
                children: [
                    { value: 'SubItem4.1.1', label: 'Sub-item 4.1.1' },
                    { value: 'SubItem4.1.2', label: 'Sub-item 4.1.2' }
                ] 
            },
            { 
                value: 'SubItem4.2', 
                label: 'Sub-item 4.2 (selected on init)', 
                children: [
                    { value: 'SubItem4.2.1', label: 'Sub-item 4.2.1' },
                    { value: 'SubItem4.2.2', label: 'Sub-item 4.2.2' }
                ] 
            },
            { 
                value: 'SubItem4.3', 
                label: 'Sub-item 4.3 (hideCheckbox)',
                showCheckbox: false
            },
            { 
                value: 'SubItem4.4', 
                label: 'Sub-item 4.4 (unSelectable)',
                disabled: true
            }
        ]
    }
]