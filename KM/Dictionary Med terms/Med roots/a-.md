---
tags: [" #medroot"]
aliases: [an-]
forms: [prefix]
roots: [a-, an-]
alphabet:: A
definition: [not, without, lacking, deficient]
---
 >[!Note] Definition of a-
>not, without, lacking, deficient
_____
>[!info]+ Etymology of a-
>#greek
>- an- when preceding "h" or {vowel}
_____
>[!example]+ Related terms
>
>|    [[a-]]    | not | without | lacking, deficient |         -         |   -   |     
|:------------:|:---:|:-------:|:------------------:|:-----------------:|:-----:| 
|  [[hypo-]]   |  -  |    -    |        YES         | low, below normal | under |     
| [[in(not)-]] | YES |    -    |         -          |         -         |   -   |     
|   [[non-]]   | YES |    -    |         -          |         -         |   -   |     
|  [[olig-]]   |  -  |    -    |        YES         |        few        |   -   |     
_____
>[!tip]+ Derivations
>```dataview
TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS DEFI
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]