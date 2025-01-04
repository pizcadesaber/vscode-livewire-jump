# Livewire Jump Extension for VS Code

This extension allows you to quickly navigate between Livewire views and their associated PHP classes, as well as between Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Navigate from Blade to Livewire**: Easily jump from a Blade file to its corresponding Livewire PHP class. Right-click on a Blade file located in the `livewire` directory and select `Go to Livewire Class`.

    ![Go to Livewire class](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-class.gif)

- **Navigate from class file to view:** If you're in a file located within the `app/Livewire` folder, you'll have a `Go to Livewire view` option to quickly navigate to the corresponding file in `resources/views/livewire`. (It relies on the file path, not the PHP code itself.)
  
- **Navigate from Blade to other components**: This feature allows you to go from a Blade view to other Livewire and Blade components. Hold `Ctrl` and left-click on any tag that starts with `<x-` or `<livewire:`. (While the full tag name isn’t highlighted in HTML, any word you click on will take you to the corresponding file.)

    ![Go to component view](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-component.gif)

- **Autocomplete Livewire component names:** When the extension is loaded, it reads the routes found in `app/Livewire` and adds them for autocompletion when typing `<livewire:`. It causes issues when you type a `.` and new classes don't load until the extension is restarted (or VS Code is restarted).

    You can use the `livewire-jump.autocomplete.exclude` setting to exclude folders or files relative to `app/Livewire`. **Important:** For now, you need to restart the editor to apply the changes. By default, the `Pages` subfolder is excluded, and I recommend storing your full-page components in this folder to prevent them from appearing in suggestions.

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard conventions of Laravel and Livewire for seamless integration.

## Known Issues

- It doesn't handle changes in the extension's configuration values well. It's better not to touch the `livewirePath` property, as it is not yet used in all places.

If you encounter any bugs or unexpected behavior, feel free to report it in the repository.