# Changelog

All notable changes to the **Livewire Jump** extension will be documented in this file.

## [Unreleased]

- No changes yet.

## [2.1.1] - 2025-01-27

- Fixes recursive discovery of Blade components.
- Links to components that don't start with `x-` or `livewire:`.

## [2.1.0] - 2025-01-26

- Support for Blade icons. You can add paths to the folders containing SVG files to autocomplete the tags.  
- The file selector for autocompletion has been updated for cases where `.blade.php` files are defined as the PHP language.

## [2.0.3] - 2025-01-25

- Improved the trigger for view autocompletion.  
- Fixed autocompletion insertion to prevent it from being added after a `.`.

## [2.0.2] - 2025-01-24

- PHP component files are now scanned to identify view aliases within `view()`. Additionally, multiple related views are handled to facilitate navigation.
- Views are skipped as components if no `index.blade.php` file exists in subdirectories. Livewire components are detected from the `app/Livewire` directory (Volt is not supported).
- **Breaking Change:** The `view.dirs` structure has been updated. The key format is now `blade-dir|php-dir`, and the value format is `view-prefix|tag-prefix`. Review your configuration if you’ve modified this setting, as `view-prefix` and `tag-prefix` values are now swapped.
- A count of views, components (Blade and Livewire), and PHP classes associated with `view.dirs` is now displayed when views are updated.

> **Important:** To apply these changes, select `Update Views` from the context menu of a PHP or Blade file. This will update your views to the new system.

## [2.0.1] - 2025-01-17

- Improved naming for settings.
- Updated the visibility of `Go to *` commands after views are refreshed.
- Added a `Clear views` command to remove cached views (`Ctrl+Shift+P` and search for this command).

## [2.0.0] - 2025-01-15

- Fully refactored the extension core. All providers are now connected to a unified and large-scale caching system.
- Added a new context menu option to scan all Blade files and register them locally in the workspace, enabling faster loading instead of real-time file reading.
- The new system is a significant improvement, particularly with the route selection configuration, where prefixes for views and tags can be specified. The key must be `bladeDir|classDir`, and the value `tagPrefix|aliasPrefix`.

## [1.3.0] - 2025-01-14

- Changed tag navigation from definitions to links for `<livewire:...>` and `<x-...>`.
- Added autocomplete for `view('')`, suggesting existing Blade files.
- Minor bug fixes and improvements.

## [1.2.1] - 2025-01-10

- Added support for Blade component classes:
  - Navigate between `/resources/views/components/my-class.blade.php` and `/app/Views/Components/MyClass.php`.
  - Commands dynamically adjust their visibility based on the open file type (`Blade` or `PHP`).
- Improved command visibility logic:
  - Commands like `Go to Blade View` or `Go to PHP File` now only appear in the context menu when applicable.
- Enhanced `Go to` functionality for Livewire components and Blade views.

## [1.2.0] - 2025-01-04

- Introduced navigation from Livewire class files to their associated Blade views:
  - Right-click on a Livewire class file and select `Go to Livewire View`.
- Added autocomplete for `<livewire:` component tags:
  - Displays available Livewire components when typing `<livewire:`.
  - New setting `livewire-jump.autocomplete.exclude` to exclude certain folders (e.g., the `Pages` subfolder) from autocomplete suggestions.
- Bug fixes and minor improvements to the command panel.

> **Note:** Refer to the Features and Known Issues sections in the README.md for detailed instructions. This is a preliminary release.

## [1.1.0] - 2024-12-23

- Improved handling of Blade slots: `<x-slot>` elements were excluded from navigation.
- Minor performance improvements when navigating between Blade views and PHP classes.

## [1.0.0] - 2024-12-09

- Initial release with basic navigation features:
  - Navigate from Livewire Blade views to their associated PHP classes using the context menu (`Right Click > Go to Livewire Class`).
  - Navigate from PHP component classes to their associated Blade views (similarly, by selecting `Go to Blade View`).
  - Added navigation support with `Ctrl+Left Click` on HTML component tags (`x-` and `livewire:`).