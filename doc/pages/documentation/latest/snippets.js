define("snippets", function () {

    var Snippets = function () {
        this.snippets = [];

        this.snippets.push({
            snippetId: "snippet1",
            title: "Simple list of items"
        });

        this.snippets.push({
            snippetId: "snippet2",
            title: "Multiselect list",
            subtitle: "Multiple items are selectable."
        });

        this.snippets.push({
            snippetId: "snippet3",
            title: "Searchable list",
            subtitle: "List with preselection and a searchBar."
        });

        this.snippets.push({
            snippetId: "snippet4",
            title: "Grouped list items",
            subtitle: "Multiple item groups and disabled items."
        });
    };

    return new Snippets();
});
