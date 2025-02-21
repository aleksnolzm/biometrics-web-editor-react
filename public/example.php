<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Files</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <link rel="shortcut icon" href="#" />

    <link href="filemanager/files.css" rel="stylesheet">
</head>
<body style="touch-action: pan-y">

<div class="files"></div>

<script src="filemanager/files.min.js"></script>
<script>
    const elm = document.querySelector('.files')
    new Files(elm, {
        listFilesUrl: 'api/listfiles.php',
        listFoldersUrl: 'api/listfolders.php',
        deleteFilesUrl: 'api/delete.php',
        moveFilesUrl: 'api/move.php',
        createFolderUrl: 'api/createfolder.php',
        uploadFilesUrl: 'api/upload.php',
        renameFileUrl: 'api/rename.php',
        getMmodelsUrl: 'api/getmodels.php',
        textToImageUrl: 'api/texttoimage.php',
        upscaleImageUrl: 'api/upscaleimage.php',
        controlNetUrl: 'api/controlnet.php',
        saveTextUrl: 'api/savetext.php',

        /*
        // Using S3 Storage
        listFilesUrl: 'api/listfiles-s3.php',
        deleteFilesUrl: 'api/delete-s3.php',
        moveFilesUrl: 'api/move-s3.php',
        createFolderUrl: 'api/createfolder-s3.php',
        uploadFilesUrl: 'api/upload-s3.php',
        renameFileUrl: 'api/rename-s3.php',
        textToImageUrl: 'api/texttoimage-s3.php',
        upscaleImageUrl: 'api/upscaleimage-s3.php',
        controlNetUrl: 'api/controlnet-s3.php',
        saveTextUrl: 'api/savetext-s3.php',
        viewUrl: 'api/view-s3.php', // Used if using S3 (for secure bucket)
        viewFileUrl: 'api/viewfile.php', // Used if using S3 (for public bucket)
        */

        folderTree: true,
       
        // panelReverse: true,
        // filesOnly: true,
        // filePicker: true,
        // onSelect: (url)=>{ },
        // showRelativeTime: true,
        // locale: 'default',
        // dateShortOptions: { // Used in file list
        //     year: 'numeric',
        //     month: 'short',
        //     day: 'numeric',
        // },
        // dateLongOptions: { // Used in file info
        //     weekday: 'short',
        //     year: 'numeric',
        //     month: 'short',
        //     day: 'numeric',
        //     hour: 'numeric',
        //     minute: 'numeric',
        // },

        allowedFileTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'image/bmp',
            'image/tiff',
            'image/svg+xml',
            'image/vnd.adobe.photoshop',
            'video/mp4',
            'video/quicktime',
            'audio/mpeg',
            'application/json',
            'application/font',
            'application/pdf',
            'application/zip',
            'application/x-rar-compressed',
            'application/msword',
            'application/rtf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'text/csv',
            'text/markdown',
            'text/plain',
            'text/css',
            'text/javascript',
            'text/html',
        ]
    });
</script>
</body>
</html>