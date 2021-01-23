All the init functions might be out of order in regards to how they are instantiated.
Need to move to new load order system.

There is a new modal listener relationship style that looks a lot cleaner.
They need to be listener on instead of listener once I think from now on.

Modal can handle objects now and post to load dialogs, dialogs need to be caught up on new standards.

All alerts need to move to new object key pair system, get rid of unnessary positive negative system.

Modal needs to be unloaded on every successful interaction.

Need to go back and test the status on Ajax requests, and remove them. I like the idea of the data you get back from the server being the data you need, not a json with a status, then the data.


All paths should be using standardized names via path info. Not file name, but base name. Not nodename, filename, dirname, name, or something. basename, directory, extension, and type.


The checkfor unsaved changes could be a more globally accesble function