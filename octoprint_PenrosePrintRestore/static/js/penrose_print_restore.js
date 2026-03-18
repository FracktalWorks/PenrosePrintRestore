$(function() {
    function PenrosePrintRestoreViewModel(parameters) {
        var self = this;

        self.VM_settings = parameters[0];

        // self.saveConfig = function() {
        //     var data = {
        //         plugins: {
        //             PenrosePrintRestore: {

        //             }
        //         }
        //     };
        //     self.VM_settings.saveData(data);
        // };

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin !== "PenrosePrintRestore") {
                return;
            }
            console.log(data);
        };

        self.onStartup = function() {

        };

        self.onBeforeBinding = function() {
            console.log('Binding PenrosePrintRestoreViewModel')

            self.Config = self.VM_settings.settings.plugins.PenrosePrintRestore;

            console.log(self.Config);
        };
    }

    OCTOPRINT_VIEWMODELS.push([
        PenrosePrintRestoreViewModel,
        ["settingsViewModel"],
        ["#settings_penrose_print_restore"]
    ]);
});
