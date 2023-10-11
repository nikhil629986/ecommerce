const productsContainers = document.getElementsByClassName('productsContainer');

// Fetch the data from the API and parse it as JSON
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Loop over each product in the API data
    products.forEach(product => {
      // Create HTML elements for the product data
      const productCard = document.createElement('div');
      const productImage = document.createElement('img');
      const productTitle = document.createElement('h2');
      const productPrice = document.createElement('p');
      const productCategory = document.createElement('p');
      const productDescription = document.createElement('p');

      // Set the values for the product data
      productCard.classList.add('product-card');
      productImage.setAttribute('src', product.image);
      productTitle.textContent = product.title;
      productPrice.textContent = `Price: $${product.price}`;
      productCategory.textContent = `Category: ${product.category}`;
      productDescription.textContent = `Description: ${product.description}`;

      // Append the HTML elements to the container
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productPrice);
      productCard.appendChild(productCategory);
      productCard.appendChild(productDescription);

      productsContainers.appendChild(productCard);
      // Append the product card to each productsContainer element
    //   Array.from(productsContainers).forEach(container => container.appendChild(productCard));
    });
  });