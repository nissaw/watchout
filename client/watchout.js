// start slingin' some d3 here.

d3.select('.arena').selectAll('.asteroid')
  .data( [1, 2, 3, 4, 5] )
  .enter().append('svg')
  .attr('class', 'asteroid');

// d3.selectAll('.asteroid').selectAll('img')
//   .data( [50] )
//   .enter()
//   .append('img')
//   .attr('xlink:href', 'asteroid.png')

// d3.selectAll('.asteroid').data( [ 50, 50 , 50, 50, 50 ] )
//   .attr('height', function(d) { return d + 'px'}  )
//   .attr('width', function(d) { return d + 'px'})
