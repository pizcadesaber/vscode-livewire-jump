# Livewire Jump Extension for VS Code

This extension allows you to quickly navigate between Livewire views, their associated PHP classes, and Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Navigate from Blade to PHP class**: Easily jump from a Blade file to its corresponding PHP class. Right-click on a Blade file located in the `resources/views` directory and select `Go to PHP Class`.

- **Navigate from PHP class to Blade view**: If you're in a file located within the `app/Livewire` or `app/View` folders, you'll have a `Go to Blade View` option to quickly navigate to the corresponding file in `resources/views`. This feature relies on the file path, not the PHP code itself.

    ![Go to PHP Class and View](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-class.gif)

- **Navigate from Blade to other components**: Jump from a Blade view to other Livewire or Blade components. Hold `Ctrl` (or `Cmd` on Mac) and left-click on any tag that starts with `<x-` or `<livewire:`.

    ![Go to component views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-links.gif)

- **Autocomplete Livewire component names**: The extension reads the paths found in `app/Livewire` and provides autocompletion for `<livewire:` tags. You can exclude specific folders or files relative to `app/Livewire` using the `livewire-jump.autocomplete.exclude` setting.

    > **Note:** The `Pages` subfolder is excluded by default. Restarting the editor is required to apply changes to the exclusion list.

- **Navigate from view string to Blade view**: Now you can navigate directly from a `view('...')`, `layout('...')`, or `#[Layout('...')]` string to the corresponding Blade view file by clicking the link.

- **Autocomplete for view string**: Autocomplete suggestions when typing `view('')`, or similar functions, showing existing Blade view files.

    ![View string](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-string.gif)

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard Laravel and Livewire conventions for seamless integration.  
If your project uses a custom folder structure, update the extension settings to match your paths.  

## Known Issues

If you encounter any bugs or unexpected behavior, feel free to report them in the repository.
