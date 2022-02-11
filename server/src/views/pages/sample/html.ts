const html = ({ counter }: { counter: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div>${counter}</div>
    </body>
    <!--
    <script src="js/counter.js" defer></script>
    -->
  </html>
`;

export default html;
