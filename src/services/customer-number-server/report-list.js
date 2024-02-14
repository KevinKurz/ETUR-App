const report =
    [
        {
            id: '2412',
            category: "Feedback",
            customerId: "123",
            description: "This is a description",
            labels: ["label1", "label2"],
            owner: "Product Manager",
            assignedTo: "Sinan",
            createdAt: "2020-01-01:12:00:00",
            editedAt: "2020-01-01:12:00:00",
            closedAt: "2020-01-01:12:00:00",
            state: "Open",
            priority: 4,
            comments:
                [
                    {
                        author: "Jens Reiner",
                        message: "Nice programm",
                        createdAt: "2020-01-01:12:00:00",
                        type: 'kunde',
                    },
                ],
            closeReason: "This is a close reason",
            references:
                [
                    {
                        type: "github",
                        url: "",
                        issueNumber: 1
                    }
                ]
        },
        {
            id: '1234',
            category: "Bug",
            customerId: "456",
            description: "This is a description",
            labels: ["label1", "label2"],
            owner: "Developer",
            assignedTo: "Kevin",
            createdAt: "2020-01-01:12:00:00",
            editedAt: "2020-01-01:12:00:00",
            closedAt: "2020-01-01:12:00:00",
            state: "Open",
            priority: 1,
            comments:
                [
                    {
                        author: "Jens Reiner",
                        message: "Found a bug",
                        createdAt: "2020-01-01:12:00:00",
                        type: 'developer',
                    },
                ],
            closeReason: "This is a close reason",
            references:
                [
                    {
                        type: "github",
                        url: "",
                        issueNumber: 1
                    }
                ]
        },
        {
            id: '5678',
            category: "Problem",
            customerId: "789",
            description: "This is a description",
            labels: ["label1", "label2"],
            owner: "Developer",
            assignedTo: "Flo",
            createdAt: "2020-01-01:12:00:00",
            editedAt: "2020-01-01:12:00:00",
            closedAt: "2020-01-01:12:00:00",
            state: "Open",
            priority: 2,
            comments:
                [
                    {
                        author: "Jens Reiner",
                        message: "Found a problem",
                        createdAt: "2020-01-01:12:00:00",
                        type: 'manager',
                    },
                ],
            closeReason: "This is a close reason",
            references:
                [
                    {
                        type: "github",
                        url: "",
                        issueNumber: 1
                    }
                ]
        }
    ];

export function getReport(roll) {
    debugger;
    let response = report.filter(k => k.owner == roll);
return response;
}