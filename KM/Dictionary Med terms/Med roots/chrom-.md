---
tags: [" #medroot"]
aliases: [chroma-, chromat-]
roots: [chrom-, chroma-, chromat-]
forms: [combining]
alphabet:: C
definition: [color, pigment]
---
>[!Note] DEFINITION of chrom-
>pigment, color
_____
>[!info]+ ETYMOLOGY of chrom-
>#greek chroma, chromatos
_____
>[!example]+ RELATED TERMS to chrom-
>
_____
>[!tip]+ DERIVATIONS of chrom-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]