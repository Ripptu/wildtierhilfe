import https from 'https';

https.get("https://www.directupload.eu/file/d/9291/utk4o5zz_jpg.htm", res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/[^"]+\.jpg/g);
    console.log(match);
  });
});
