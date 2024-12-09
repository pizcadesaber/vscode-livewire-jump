# Livewire Jump Extension for VS Code

This extension allows you to quickly navigate between Livewire views and their associated PHP classes, as well as between Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Navigate from Blade to Livewire**: Easily jump from a Blade file to its corresponding Livewire PHP class.

    ![Go to Livewire class](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-class.gif)
  
- **Navigate from Blade to other components**: This feature allows you to go from a Blade view to other Livewire and Blade components. Support for Blade components was added.

    ![Go to component view](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/go-to-component.gif)

> **Note:** While the full tag name isn’t highlighted in HTML, any word you click on will take you to the corresponding file.

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard conventions of Laravel and Livewire for seamless integration.

## Known Issues

Currently, there are no significant known issues. If you encounter any bugs or unexpected behavior, feel free to report it in the repository.

## Release Notes

### 1.0.0

- Go to PHP class from Livewire Blade views: Right-click and select `Go to Livewire Class`.
- Go to Livewire or Blade component views from Blade views (`Ctrl+click`).

Enjoy faster and more efficient navigation in your Laravel project with Livewire and Blade!