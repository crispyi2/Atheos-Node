This file is to list functions that should potentially be added to the Atheos Core:

<code php>
PhP StartsWith / EndsWith: https://stackoverflow.com/questions/834303/startswith-and-endswith-functions-in-php
function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}


Recursevly delete directories, it's used in file manager and market place, both in remove and update
</code>



<code js>
The MS Conversion Library
CodeJar
https://spck.io/


</code>



<code js/php>

</code>