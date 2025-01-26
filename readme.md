# Livewire Jump Extension for VS Code

*Jump ahead and develop with speed!*

This extension allows you to quickly navigate between views and their associated PHP files in Laravel-Livewire projects. It streamlines your workflow by providing an efficient way to jump from one file to another with just a click.

## Features

- **Register components and autocomplete your code:** To improve performance, a manual action has been added to register all components and use them for code autocomplete in different parts of your project. This action is hidden outside the context of Blade and PHP documents. It also displays the number of views, components (Blade and Livewire), and PHP classes in `view.dirs` when views are updated.

    ![Refresh Views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/refresh-views.gif)

    > **Note:** File-watching-based updates are not yet implemented.

- **Register and autocomplete Blade icons:** Specify the paths to search in the extension settings and run the `Refresh icons` command to start autocompleting your code.

    ![Autocomplete Blade icons](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-icon-completion.gif)

    Here's an example for Blade icons from the project and Heroicons.

    ![Blade icons settings](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-icon-settings.jpg)

- **Jump between Blade views and PHP files:** Easily navigate between Blade files and their corresponding PHP classes. Right-click on a Blade or PHP file and select `Go to PHP File` or `Go to Blade File`.

    ![Go to PHP Class and View](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-class.gif)

- **Autocomplete components and jump to their files:** The extension scans routes found in `app/Livewire` and provides autocomplete for `<livewire:` and `<x-` tags. These routes are loaded using the `livewire-jump.view.dirs` setting. Note: Volt components are not supported. Navigate from a Blade view to other Livewire or Blade components by holding down `Ctrl` (or `Cmd` on Mac) and left-clicking on any component tag.

    ![Go to Component Views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-links.gif)

- **Autocomplete and view links:** Autocompletes arguments in methods like `view` or similar with views. It is highlighted to allow `Ctrl+click` to navigate to the corresponding Blade file. You can notify me if any methods are missing.

    ![View String](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-string.gif)

- **Customize view discovery:** The `livewire-jump.view.dirs` setting allows you to customize discovery by specifying prefixes for views and tags. Each key-value pair must follow this format: `"bladeDir|phpDir": "viewPrefix|tagPrefix"`. Keys also support `:` as a separator, but values do not, as they would conflict with `livewire:`. Specifying both directories is not mandatory, but if you want to define only `phpDir`, prefix it with `|` so it is passed as the second argument.

    ![View Discovery](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-discovery.jpg)

    > **Note:** The current behavior allows discovering Livewire components from their PHP classes (traditional). Additionally, Blade components are added with only view files in subdirectories if they contain an `index.blade.php` file. Tags are not added if `tagPrefix` is empty.

## Requirements

This extension is designed to support Laravel projects with additional Livewire support.

It does not register any programming language. To ensure proper functionality, make sure you have PHP and Blade language support enabled, and that your `*.php` and `*.blade.php` files are associated with them.

## Extension Settings

It follows the latest Laravel and Livewire conventions to provide code autocomplete and link files for quick navigation.

A set of editor settings can be found under `Settings > Extensions > Livewire Jump` to customize its behavior. However, ensure your project adheres to Laravel and Livewire’s standard conventions for seamless integration.

## Known Issues

If you encounter errors or unexpected behavior, feel free to report them in the repository.