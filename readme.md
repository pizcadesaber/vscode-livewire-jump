# Livewire Jump Extension for VS Code

This extension allows you to quickly navigate between Livewire views, their associated PHP classes, and Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Navigate from Blade to PHP class**: Easily jump from a Blade file to its corresponding PHP class. Right-click on a Blade file located in the `resources/views` directory and select `Go to PHP Class`.

    ![Go to Livewire class](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-class.gif)

    > **Tip:** The directories for Blade views and PHP classes are fully configurable via the extension's settings. Adjust the paths relative to your workspace to match your project's structure.

- **Navigate from PHP class to Blade view**: If you're in a file located within the `app/Livewire` or `app/View` folders, you'll have a `Go to Blade View` option to quickly navigate to the corresponding file in `resources/views`. This feature relies on the file path, not the PHP code itself.

    > **Tip:** You can customize the relative paths for Livewire and Blade views through the extension's settings to ensure compatibility with non-standard folder structures.

- **Navigate from Blade to other components**: Jump from a Blade view to other Livewire or Blade components. Hold `Ctrl` (or `Cmd` on Mac) and left-click on any tag that starts with `<x-` or `<livewire:`. Even if the full tag isn’t highlighted, clicking any part of the tag will take you to the corresponding file.

    ![Go to component view](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-component.gif)

- **Autocomplete Livewire component names**: The extension reads the paths found in `app/Livewire` and provides autocompletion for `<livewire:` tags. You can exclude specific folders or files relative to `app/Livewire` using the `livewire-jump.autocomplete.exclude` setting.

    > **Note:** The `Pages` subfolder is excluded by default. Restarting the editor is required to apply changes to the exclusion list.

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard Laravel and Livewire conventions for seamless integration.  
If your project uses a custom folder structure, update the extension settings to match your paths.  

## Known Issues

- **Autocomplete issues**: Autocompletion doesn’t update dynamically when new classes are added to `app/Livewire`. Restarting the extension (or VS Code) is required for changes to take effect.

If you encounter any bugs or unexpected behavior, feel free to report them in the repository.
