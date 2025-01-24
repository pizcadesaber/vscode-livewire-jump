# Livewire Jump Extension for VS Code

*Jump ahead, jump fast—speedy development!*

This extension allows you to quickly navigate between Livewire views, their associated PHP classes, and Blade components in Laravel projects. It streamlines the development workflow by providing an efficient way to jump from one file to another with just one click.

## Features

- **Register components and autocomplete Blade and Livewire tags:** To enhance performance, a manual action has been added to register all components and use them for code autocompletion across different parts of your project. The `Refresh Views` action is only available in Blade and PHP language files.

    ![Refresh views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/refresh-views.gif)

    > **Note:** Updates based on file change observation are still pending implementation.  
    > **Breaking Change:** The `livewire-jump.view.dirs` configuration has been updated. Keys now follow the format `bladeDir|phpDir`, and values use `viewPrefix|tagPrefix`. Ensure you update your settings accordingly if you've customized this value.

- **Customize view discovery:** The `livewire-jump.view.dirs` setting allows you to customize the search by specifying prefixes for views and tags. Each key-value pair must follow this format: `"bladeDir|phpDir": "viewPrefix|tagPrefix"`. Keys also support `:` as a separator, but values do not, as it would conflict with `livewire:`. It’s not mandatory to specify both directories, but if you want to define only `phpDir`, you must prepend it with `|` so it is passed as the second argument.

    ![View discovery](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-discovery.jpg)

- **Jump from Blade view to PHP class (and vice versa):** Easily navigate between Blade files and their corresponding PHP classes. Right-click on a Blade or PHP file and select `Go to PHP Class` or `Go to Blade Class`.

    ![Go to PHP Class and View](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-class.gif)

- **Autocomplete component names:** The extension reads the paths found in `app/Livewire` and provides autocompletion for `<livewire:` and `<x-` tags. These paths are loaded using the `livewire-jump.view.dirs` setting. Note: Volt components are not supported.

- **Skip non-existent component views:** Components without an `index.blade.php` file in their subdirectories are skipped, ensuring cleaner navigation.

- **Jump from Blade to other components:** Navigate from a Blade view to other Livewire or Blade components. Hold `Ctrl` (or `Cmd` on Mac) and left-click on any tag that starts with `<x-` or `<livewire:`.

    ![Go to component views](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/blade-links.gif)

- **Autocomplete for view string:** Autocomplete suggestions when typing `view('')`, or similar functions, show existing Blade view files.

    ![View string](https://github.com/pizcadesaber/vscode-livewire-jump/raw/HEAD/docs/images/view-string.gif)

- **Jump from view string to Blade view:** You can navigate directly from a `view('...')`, `layout('...')`, or `#[Layout('...')]` string to the corresponding Blade view file by clicking the link.

- **Display view and component counts:** The extension now displays the number of views, components (Blade and Livewire), and `view.dirs` PHP classes when refreshing views.

## Requirements

This extension has no additional dependencies. You only need a Laravel project with Livewire to take full advantage of its features.

## Extension Setup

The extension doesn't require additional configuration. Simply install it, and it will be ready to use. However, ensure your project follows the standard Laravel and Livewire conventions for seamless integration.

If your project uses a custom folder structure, update the extension settings to match your paths.

## Important Note

To apply the latest changes, select **`Refresh Views`** from the context menu of a **PHP** or **Blade** file. This updates your views to the new system.

## Known Issues

If you encounter any bugs or unexpected behavior, feel free to report them in the repository.